import Image from 'next/image'

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    fullWidth?: boolean;
}

const Button = ({type, title, icon, variant, fullWidth}: ButtonProps) => {
    return (
        <button className={`flexCenter gap-3 rounded-full border ${variant} ${fullWidth && 'w-full'}`} type={type}>
            {icon && <Image src={icon} alt={title} width={32} height={32}/>}
            <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
        </button>
    )
}
export default Button
