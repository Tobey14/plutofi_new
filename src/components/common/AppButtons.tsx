type Props = {
    styles?: string;
    btnWidth?:string;
}

export default function AppButtons({styles, btnWidth="w-[7rem]"}: Props) {
    function navigateToAppStore(){
        window.open('https://play.google.com/store/apps/details?id=com.useplutofi.mobile&hl=en', '_blank');
    }
    return (
        <div className={`mt-6 flex gap-2 ${styles}`}>
            <img src={"/images/play_store.svg"} alt="Google Play" className={`${btnWidth} cursor-pointer`} onClick={navigateToAppStore}/>
            <img src="/images/app_store.svg" alt="App Store" className={`${btnWidth} cursor-pointer`} />
        </div>
    )
}