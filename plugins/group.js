export default (context, inject, app) => {
    const group = {
        admin: 1338,
        user: 1,
    }
    inject('group', group);
}
