import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
// Copy it from Your Firebase project
const config = {
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 