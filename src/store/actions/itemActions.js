export const createItem = (transaction) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('transactions')
      .add({
      ...transaction,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
      })
      .then(() => {
        firestore
        .collection('users')
        .doc(authorId)
        .update({
          balance: eval(profile.balance + transaction.pOrM + transaction.amount)
        })
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
  }
};