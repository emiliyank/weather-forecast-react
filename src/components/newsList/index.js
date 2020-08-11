import React from 'react'
import styles from './index.module.css'
import cx from 'classnames'
import NewsPost from '../newsPost'
import HotNewsSidebar from '../hotNewsSidebar'
import FeaturedImage1 from '../../images/featured-image-1.jpg'
import FeaturedImage2 from '../../images/featured-image-2.jpg'
import FeaturedImage3 from '../../images/featured-image-3.jpg'

const NewsList = () => {
	return(
		<div className={styles["fullwidth-block"]}>
			<div className={styles["container"]}>
				<div className={styles["row"]}>
					<div className={cx(styles["content"], styles["col-md-8"])}>
						<NewsPost 
							title="Nemo enim ipsam voluptatem quia voluptas"
							image={FeaturedImage1}
							content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio"
							link="news1"
						/>

						<NewsPost 
							title="enim 2"
							image={FeaturedImage2}
							content="Do do"
							link="news2"
						/>

						<NewsPost 
							title="Nemo3"
							image={FeaturedImage3}
							content="Just do it!"
							link="news3"
						/>
					</div>
					<HotNewsSidebar/>
				</div>
			</div>
		</div>
	)
}

export default NewsList