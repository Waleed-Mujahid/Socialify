import classes from "./RowItem.module.css";

interface Post {
  heading: string;
  text: string;
  alignRight: boolean;
}

export default function RowItem({ post }: { post: Post }) {
  return (
    <div className={classes.box}>
      <img 
       className={!post.alignRight ? classes.img: classes.hide}
        src="https://www.jsonline.com/gcdn/presto/2021/05/12/PMJS/968d5180-2f47-48b3-a427-d3037a9b8e5e-MJS_PalestineProtest0005.JPG?crop=3899,2193,x1,y147&width=660&height=372&format=pjpg&auto=webp"
        alt="img"
      />
      <div>
        <div className={classes.heading}>
          {post.heading} <br />
        </div>
        <div className={classes.para}>
          {post.text} <br />
        </div>
      </div>
      <img 
       className={post.alignRight ? classes.img: classes.hide}
        src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="img"
      />
    </div>
  );
}
