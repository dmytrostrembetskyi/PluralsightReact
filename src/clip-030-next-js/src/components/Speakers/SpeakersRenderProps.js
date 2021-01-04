function SpeakerRenderProps(props) {
    const speakers = [
      { imageSrc: "speaker-component-1124", name: "Douglas Croskford" },
      { imageSrc: "speaker-component-1530", name: "Tamara Baker" },
      { imageSrc: "speaker-component-10803", name: "Eugene Chuvyrov" },
    ];
    return props.children({ speakers });
  }

  export default SpeakerRenderProps;