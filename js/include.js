class MyIncludeElement extends HTMLElement {
  async connectedCallback() {
    const rel = this.getAttribute("rel");
    if (!rel) {
      console.error("No 'rel' attribute found.");
      return;
    }

    try {
      const response = await fetch(rel);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.text();
      const parsedContent = new DOMParser().parseFromString(data, "text/html").body;

      // Replace the current element with the parsed content
      this.replaceWith(...parsedContent.childNodes);

      // Dispatch an event to notify that the content has been loaded
      document.dispatchEvent(new Event('contentLoaded'));
    } catch (error) {
      console.error(`Error fetching ${rel}:`, error);
    }
  }
}

// Define the custom element tag with a hyphenated name
customElements.define("my-include", MyIncludeElement);
