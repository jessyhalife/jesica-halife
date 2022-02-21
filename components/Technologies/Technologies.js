import React from 'react'
import Image from 'next/image';

const Technologies = () => {
    return (
        <>
            <div>

                <Image src="/logos/javascript.png" alt="javascript" width={24} height={24} objectFit="contain" />
                <Image src="/logos/typescript.png" alt="typescript" width={24} height={24} objectFit="contain" />
                <Image src="/logos/aws-logo.png" alt="aws" width={24} height={24} objectFit="contain" />
                <Image src="/logos/docker.png" alt="docker" width={24} height={24} objectFit="contain" />
            </div>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: row;
                    gap: 24px;
                    align-items: center;
                }
            `}</style>
        </>
    )
}

export default Technologies