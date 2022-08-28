(() => {
  const API_BASE_URL = "https://www.algoexpert.io/api/testimonials";
  const PAGE_SIZE = 5;

  let canFetchTestimonials = true;
  let afterID = null;
  let allTestimonialsFetched = false;

  const testimonialsContainer = document.getElementById(
    "testimonials-container"
  );

  testimonialsContainer.addEventListener("scroll", handleScroll);

  function handleScroll() {
    console.log(this)
    if (!canFetchTestimonials) return;
    // Note: Add this here to refer context of event listener ex: testimonialsContainer
    const spaceLeftForScroll =
      this.scrollHeight - this.scrollTop - this.clientHeight;
    // scrollHeight: total content height, scrollTop: how much has been scrolled, clientHeight: visible height of content
    if (spaceLeftForScroll > 0) return;
    fetchTestimonialsAndAppend();
  };

  function createTestimonialsUrl() {
    const url = new URL(API_BASE_URL);
    url.searchParams.set("limit", PAGE_SIZE);
    if (afterID) url.searchParams.set("after", afterID);
    return url;
  }

  function createTestimonialElement(message) {
    const element = document.createElement("p");
    element.classList.add("testimonial");
    element.textContent = message;
    return element;
  }

  async function fetchTestimonialsAndAppend() {
    if (allTestimonialsFetched) return;
    canFetchTestimonials = false;
    // Fetch
    const url = createTestimonialsUrl();
    const response = await fetch(url);
    const { hasNext, testimonials } = await response.json();
    if (hasNext) afterID = testimonials[testimonials.length - 1].id;
    if(hasNext === false) allTestimonialsFetched = true;
    canFetchTestimonials = true;

    // Append
    const fragment = document.createDocumentFragment();
    testimonials.forEach((testimonial) =>
      fragment.appendChild(createTestimonialElement(testimonial.message))
    );
    testimonialsContainer.appendChild(fragment);
  }

  fetchTestimonialsAndAppend();
})();
