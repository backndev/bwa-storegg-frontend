import Image from 'next/image';
import ClassNames from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
    title: string;
    icon: 'icon-overview' | 'icon-transactions' | 'icon-messages' | 'icon-card' | 'icon-settings' | 'icon-logout';
    active?: boolean;
    href: string
}
export default function MenuItem(props: Partial<MenuItemProps>) {
    const {title, icon, active, href} = props;
    const classItem = ClassNames({
        'item': true,
        'mb-30': true,
        active
    });
    return (
                <div className={classItem}>
                    <div className="me-3">
                        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="Menu Item" />
                    </div>
                    <p className="item-title m-0">
                        <Link href="#">
                        {/* <Link href={href}> */}
                        <a className="text-lg text-decoration-none">{title}</a>
                        </Link>
                    </p>
                </div>
    )
}
