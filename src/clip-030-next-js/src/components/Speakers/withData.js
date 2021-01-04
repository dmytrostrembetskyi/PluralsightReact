const withData = (maxSpeakersToshow) => (Component) => {
  const speakers = [
    { imageSrc: "speaker-component-1124", name: "Douglas Croskford" },
    { imageSrc: "speaker-component-1530", name: "Tamara Baker" },
    { imageSrc: "speaker-component-10803", name: "Eugene Chuvyrov" },
  ];

  return () => {
    const limitSpeakers = speakers.slice(0, maxSpeakersToshow);
    return <Component speakers={limitSpeakers}></Component>;
  };
};

export default withData;
