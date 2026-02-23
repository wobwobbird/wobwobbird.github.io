interface PageGolderProps {
    background?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}


const PageHolder = ({ background, children, className }: PageGolderProps) => {
    return (
        <div className="fixed inset-0 w-full h-full">
            <div className="absolute inset-0" >
                {background}
            </div>
            <div
                className="relative z-10 flex items-center justify-center w-full h-full"
            >
                <div className={"min-w-0 w-full max-w-[800px] px-3 md:px-4 flex flex-col" + (className ? ` ${className}` : "")} >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PageHolder;