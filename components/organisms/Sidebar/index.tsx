import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
    activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function Sidebar(props: SidebarProps) {
    const {activeMenu} = props;
    return (
        <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
            <Profile />
            <div className="menus">
            <MenuItem title="Overview" icon="icon-overview" active={activeMenu === 'overview'} href="/member" />
            <MenuItem title="Transactions" icon="icon-transactions" active={activeMenu === 'transactions'} href="/member/transactions" />
            <MenuItem title="Messages" icon="icon-messages" href="/member" />
            <MenuItem title="Card" icon="icon-card" href="/member" />
            <MenuItem title="Settings" icon="icon-settings" active={activeMenu === 'settings'} href="/member/edit-profile" />
            <MenuItem title="Log Out" icon="icon-logout" href="/sign-in" />
            </div>
            <Footer />
        </div>
    </section>
    )
}
