import React, { useEffect, useRef, useState } from "react";

const BASE_API_URL = "https://www.algoexpert.io/api/testimonials";

export interface ITestimonialAPI {
  hasNext: boolean;
  testimonials: Testimonial[];
}

export interface Testimonial {
  id: string;
  message: string;
}

function App() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [afterId, setAfterId] = useState<null | string>(null);
  const [allFetched, setAllFetched] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const createUrl = (pageSize: string = "5", afterId: null | string = null) => {
    const url = new URL(BASE_API_URL);
    url.searchParams.set("limit", pageSize);
    if (afterId) url.searchParams.set("after", afterId);
    return url;
  };

  const getTestimonials = async () => {
    if(allFetched) return;
    setFetching(true);
    const url = createUrl("5", afterId);
    const result = await fetch(url);
    const resultJSON = await result.json();
    const { hasNext, testimonials: newTestimonials }: ITestimonialAPI =
      resultJSON;
    setTestimonials([...testimonials, ...newTestimonials]);
    if(hasNext) setAfterId(newTestimonials[newTestimonials.length - 1].id);
    if(hasNext === false) setAllFetched(true);
    setFetching(false);
    console.log(testimonials);
  };

  function handleScroll(e: any) {
    if(fetching) return;
    const html = testimonialsRef.current;
    if(!html) return;
    const spaceLeftToScroll = html?.scrollHeight - html?.scrollTop - html?.clientHeight;
    if(spaceLeftToScroll > 0) return;
    getTestimonials();
  }

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", maxHeight: 400, overflow: "scroll" }} onScroll={handleScroll} ref={testimonialsRef}>
      {testimonials.map((testimonial, idx) => (
        <div style={{marginBottom: 30}} key={idx}>{testimonial.message}</div>
      ))}
    </div>
  );
}

export default App;
