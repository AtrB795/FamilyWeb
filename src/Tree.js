import { useState, useEffect } from 'react'

import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from './firebaseConfig.js';

function Tree() {
    const [nodes, setNodes] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const fetchCollection = (collectionName, setState) => {
            const collectionRef = collection(firestore, collectionName);
            onSnapshot(collectionRef, (snapshot) => {
                const docs = [];

                snapshot.docChanges().forEach((change) => {
                    const document = change.doc;
                    docs.unshift({ id: document.id, ...document.data() });
                });

                setState(docs);
            });
        };

        fetchCollection('nodes', setNodes);
        fetchCollection('links', setLinks);
    }, []);
    
    return (
        <div id='wrapper'>
            <div id='nodes'>
                Nodes
                {nodes.map(node => <div key={node.id}>{node.name}</div>)}
            </div>
            <div id='links'>
                Links
                {links.map(link => <div key={link.id}>{link.parent} => {link.child}</div>)}
            </div>
        </div>
        );
}

export { Tree };