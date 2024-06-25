import { FacebookFilled, InstagramFilled, YoutubeFilled } from "@ant-design/icons";

export function SocialMedias() {
  return (
    <div className="social-medias">
      <a href="https://www.facebook.com/mlmotos" target="_blank" rel="noreferrer">
        <FacebookFilled />
      </a>
      <a href="https://www.instagram.com/mlmotos" target="_blank" rel="noreferrer">
        <InstagramFilled />
      </a>
      <a href="https://www.youtube.com/mlmotos" target="_blank" rel="noreferrer">
        <YoutubeFilled />
      </a>
    </div>
  )
}
