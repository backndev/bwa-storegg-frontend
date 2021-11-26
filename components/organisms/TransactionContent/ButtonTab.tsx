import ClassNames from 'classnames';

interface ButtonTabProps {
    button: string;
    active: boolean;
}

export default function ButtonTab(props: ButtonTabProps) {
    const { button, active } = props;
    const classButton = ClassNames({
        'btn btn-status rounded-pill text-sm me-3': true,
        'btn-active': active
    });
    return (
        <a data-filter="*" href="#" className={classButton}>{button}</a>
    )
}
