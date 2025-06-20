import image from '../../assets/images/icons-sprite.svg';

export const Logo = () => {
    return (
        <a href="">
            <svg width="47" height="60" viewBox="0 0 47 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${image}#logo`}></use>
            </svg>
        </a>
    )
}