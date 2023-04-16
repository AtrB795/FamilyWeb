import { useState, useEffect } from 'react'

import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from './firebaseConfig.js';

function getTree(collName) {
    
}

function Tree() {
    const [nodes, setNodes] = useState([]);
    const [links, setLinks] = useState([]);

    const nodesRef = collection(firestore, 'nodes');
    onSnapshot(nodesRef, (snapshot) => {
        const docs = [];

        snapshot.docChanges().forEach((change) => {
            const document = change.doc;
            docs.unshift({id: document.id, ...document.data()});
        });

        setNodes(docs);
    });

    const linksRef = collection(firestore, 'links')
    onSnapshot(linksRef, (snapshot) => {
        const docs = [];

        snapshot.docChanges().forEach((change) => {
            const document = change.doc;
            docs.unshift({id: document.id, ...document.data()});
        });

        setLinks(docs);
    });
    
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