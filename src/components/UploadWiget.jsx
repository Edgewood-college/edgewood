import React, { useEffect, useRef } from 'react';
export const UploadWiget = () => {
    const CloudRef = useRef();
    const WidgetRef = useRef();

    useEffect(() => {
        CloudRef.current = window.cloudinary;
      WidgetRef.current = CloudRef.current.createUploadWidget({
            cloudName: 'ddhtduti2',
            uploadPreset: 'aldsvojd',
        },function(error,result){
            console.log(result)  
        })
    }, []);

    return (
        <button onClick={() =>WidgetRef.current && WidgetRef.current.open()}>
            upload
        </button>
    );
};