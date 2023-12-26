import Link from 'next/link';
import NavLinks from '../nav-links/page';
import myImage from '../../public/profilPicture.png';

export default function SideNav() {
  const imageUrl = myImage.src ? myImage.src : '';
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <div className="flex flex-row items-center justify-center leading-none text-white">
            <div className="h-12 w-12 rotate-[15deg]" />
            {/* Ajustez la classe de l'image pour occuper la quasi-totalité de la case */}
            <img
              src={imageUrl}
              alt="My Image"
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
