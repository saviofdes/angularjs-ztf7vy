function UserDetailController() {}

const UserDetail = {
  templateUrl: './user-detail.template.html',
  controller: UserDetailController,
  bindings: {
    user: '<'
  }
};

export { UserDetail };
