function ChildController() {
  this.name = 'Child';
  this.id = 1;

  this.callParent = function() {
    console.log('called from child component');
    this.onCallParentCallback()(this.id);
    this.id++;
  };
}

const ChildComponent = {
  controller: ChildController,
  templateUrl: './child.template.html',
  bindings: {
    inputName: '<',
    onCallParentCallback: '&'
  }
};

export { ChildComponent };
