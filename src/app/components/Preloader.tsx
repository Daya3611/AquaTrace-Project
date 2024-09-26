"use client";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

const Preloader: React.FC = () => {
    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const timer = setTimeout(() => {
            setShow(false);
            document.body.style.overflow = 'auto';
        }, 250);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return show && (
        <div className='fixed z-[9999999] top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white'>
            <div className='grid place-items-center'>
                <Loader className="h-7 w-7 animate-spin"/>
                <p className="text-sm text-center mt-1 text-muted-foreground">Hold on ! loading.......</p>
            </div>
        </div>
    );
};

export default Preloader;
