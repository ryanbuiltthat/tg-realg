Pledges = new orion.collection('pledges', {
  singularName: 'pledge', // The name of one of this items
  pluralName: 'pledges', // The name of more than one of this items
  link: {
    title: 'Pledges' 
  },
  tabular: {
    columns: [
      { data: "body", title: "Pledge" },
      orion.attributeColumn('createdBy', 'createdBy', 'Sent By'),
      orion.attributeColumn('createdAt', 'createdAt', 'Created At')
    ]
  }
});
Pledges.attachSchema(new SimpleSchema({
  body: {
    type: String
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
/**
 * Using dburles:collection-helpers we will add a helper to the pledges
 * collection to easily get the user
 */
Pledges.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});