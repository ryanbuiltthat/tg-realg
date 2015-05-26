orion.dictionary.addDefinition('title', 'pledge', {
    type: String,
    label: "Pledge Section Title"
});
orion.dictionary.addDefinition('subtitle', 'pledge', {
    type: String,
    label: "Pledge Section Sub-Title"
});
orion.dictionary.addDefinition('text', 'pledge', orion.attribute('froala', {
      label: 'Pledge Section Text',
      optional: true
  })
);
orion.dictionary.addDefinition('footer', 'pledge', orion.attribute('froala', {
	    label: 'Pledge Footer',
	    optional: true
	})
);