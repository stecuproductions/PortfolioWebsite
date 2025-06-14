import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { useLanguage } from "../context/LanguageContext";

const HeroContent = () => {
    const { t } = useLanguage();
    
    return(
        <div className="flex flex-col lg:flex-row justify-center gap-16 items-center-safe">
            <div className="flex w-full gap-6 flex-col flex-1">
                <div className="flex flex-col gap-4 max-w-[600px] lg:max-w-none">
                    <h1 className="text-h1 w-full text-text font-header leading-tight">
                        {t.heroTitle} <span className="text-secondary">{t.heroTitleHighlight}</span>
                    </h1>
                    <p className="text-body w-full text-text leading-relaxed max-w-prose">
                        {t.heroDescription}
                    </p>
                </div>
                <div className="flex flex-row items-center w-full gap-4 flex-wrap">
                    <a href="#Kontakt"><Button type="kontakt"/></a>
                    <a href="https://github.com/JStec0312"><Button type="github"/></a>
                </div>
            </div>
            <div className="flex-1 flex justify-end">
                <img src="/images/hero.webp" className="h-full max-h-[400px] md:max-h-[600px]" alt="hero" />
            </div>
        </div>
    )
}

export default HeroContent;