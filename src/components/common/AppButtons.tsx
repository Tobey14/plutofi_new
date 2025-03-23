type Props = {
    styles?: string;
    btnWidth?:string;
}

export default function AppButtons({styles, btnWidth="w-[7rem]"}: Props) {
    return (
        <div className={`mt-6 flex gap-2 ${styles}`}>
            <img src={"/images/play_store.svg"} alt="Google Play" className={`${btnWidth}`} />
            <img src="/images/app_store.svg" alt="App Store" className={`${btnWidth}`} />
        </div>
    )
}