/**
 * In this file are defined the definitions of the 
 * category basic.
 * It's a good practice to create a file for
 * each dictionary category
 */

orion.dictionary.addDefinition('homePriHeading', 'site', {
    type: String,
    label: "Homepage Primary Heading"
});
orion.dictionary.addDefinition('homeSecHeading', 'site', {
    type: String,
    label: "Homepage Secondary Heading"
});
orion.dictionary.addDefinition('mp4Url', 'site', {
    type: String,
    label: "Video URL: mp4 "
});
orion.dictionary.addDefinition('webmUrl', 'site', {
    type: String,
    label: "Video URL: webm"
});
orion.dictionary.addDefinition('footerHeading', 'site', {
    type: String,
    label: "Site Footer Heading"
});
orion.dictionary.addDefinition('disclaimers', 'site', orion.attribute('froala', {
	    label: 'Disclaimers',
	    optional: true
	})
);
orion.dictionary.addDefinition('videoBanner', 'site', 
	/**
	 * The file attribute is a custom orion attribute
	 * This is where orion do the magic. Just set 
	 * the attribute type and it will automatically
	 * create the form for the file.
	 * WARNING: the url of the image will not be saved in
	 * logo, it will be saved in logo.url.
	 */
	orion.attribute('file', {
	    label: 'Video Placeholder',
	    optional: true
	})
);