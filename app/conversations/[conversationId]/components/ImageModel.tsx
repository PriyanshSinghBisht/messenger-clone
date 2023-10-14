'use client'

import Model from "@/app/components/Model";
import Image from "next/image";

interface ImageModelProp{
   src?: string | null;
   isOpen? : boolean;
   onClose: ()=> void
}

const ImageModel: React.FC<ImageModelProp> = ({
    src,
    isOpen,
    onClose
}) => {
   if(!src){
    return null;
   }

   return(
    <Model isOpen={isOpen} onClose={onClose} >
      <div className="w-[90vw] h-[80vh]">
        <Image 
        alt="Image"
        className="object-contain"
        fill
        src={src}
        />
      </div>
    </Model>
   )
}

export default ImageModel