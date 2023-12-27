import Link from 'next/link';
import NavLinks from '../nav-links/page';
import myImage from '../../public/profilPicture.png';
import Image from 'next/image';

export default function SideNav() {
    const imageUrl = myImage.src ? myImage.src : '';
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link className="mb-2 flex h-20 justify-start rounded-md bg-blue-600 p-4 md:h-40" href="/">
                <Image
                  src={imageUrl}
                  width={128}
                  height={128}
                  alt="My Image"
                  className="object-cover rounded-full mx-auto max-w-full max-h-full"
                />
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 text-black">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            </div>
        </div>
    );
}
