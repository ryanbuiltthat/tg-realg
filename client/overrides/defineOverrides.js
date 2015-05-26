// Added action buttons to accounts list and enabled context menu
Template.customAccounts.replaces("orionMaterializeAccountsIndex");

// Replace default Sidebar title add logo
Template.customSidebar.replaces("orionMaterializeSidebar");

// Replace default Sidebar title add logo
Template.customSidebarLink.replaces("orionMaterializeSidebarLink");



/**
 * Register the link to return home
 */
orion.addLink({
  section: 'bottom',
  title: 'Return Home',
  routeName: 'home',
  activeRouteRegex: 'admin',
  permission: 'accounts.index',
  customClass: 'indigo darken-2 white-text'
});