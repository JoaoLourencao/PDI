import styles from './styles.module.css'

export const HeaderLoadingAvatar = ({ menu, image, name }) => {
  return (
    <div className="tw-flex tw-items-center">
      <div className="tw-mr-12 tw-w-112">
        {/* <div className="tw-flex"> */}
        <div className={`${styles.skeleton} ${styles.skeletonText}`} />
        {/* <Dropdown menu={menu} trigger={['click']} className="tw-ml-8"> */}
        {/* <button> */}
        {/* <ArrowDown /> */}
        {/* </button> */}
        {/* </Dropdown> */}
        {/* </div> */}
        {/* <div className={`${styles.skeleton} ${styles.skeletonText}`} /> */}
      </div>
      <div className="">
        {/* <HeaderUserAvatar src={image} alt={name} /> */}
      </div>
    </div>
  )
}
