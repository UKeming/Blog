import dynamic from 'next/dynamic'
export default function Post({ data }) {
    // const index = data['index']
    // const DynamicArticle = dynamic(() => import("./postContent/post" + index))
    return (
        <div className='article'>
            <p className='title'>Developing</p>
        </div>
    )
}