import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaTrash } from "react-icons/fa6";
import { v4 as uuidV4 } from "uuid";
const CustomDropZone = ({}) => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col gap-1">
      <div
        {...getRootProps()}
        className="border-dotted border-gray-200 flex flex-col py-10 justify-center items-center cursor-pointer hover:bg-gray-50"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div className="flex items-stretch flex-wrap gap-2 py-2">
        {files?.map((file, idx) => (
          <div key={uuidV4()} className="w-32 relative">
            <img
              src={URL.createObjectURL(file)}
              className="w-full object-scale-down h-32"
            />
            <p className="p-1 text-sm">{file.name}</p>
            <button
              className="border-none outline-none bg-transparent top-1 right-1 absolute text-red-500 z-20 p-2 w-fit"
              onClick={() =>
                setFiles((prevFiles) => prevFiles.filter((_, i) => idx !== i))
              }
            >
              <FaTrash className="text-xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropZone;
