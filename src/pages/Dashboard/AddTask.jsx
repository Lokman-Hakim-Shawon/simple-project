import axios from "axios";

const AddTask = () => {
    const handlesubmit=e=>{
        e.preventDefault()
        const form=e.target
        const title=form.title.value
        const file=form.file.files[0]
        const imgbb_key='ceccd7f28cf74921bd1fb98402d6032f'
        const deadline=form.deadline.value
        const des=form.des.value
        const formData=new FormData()
        formData.append('image',file)
        axios.post(`https://api.imgbb.com/1/upload?key=${imgbb_key}`,formData)
        .then(result=>{
            const img=result.data.data.url
            console.log(title,deadline,des,img,)
        console.log(img,'photo')
       })
    .catch(error=>console.log(error))
 }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handlesubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name='title' placeholder="title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Image</span>
          </label>
          <input type="file" name='file' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input type="date" name='deadline' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea type='text' name='des' className="textarea textarea-bordered" placeholder="description"></textarea>
          
        </div>
        <div className="form-control mt-6 space-y-5">
          <button className="btn bg-blue-200">Register</button>
        </div>
      </form>
    </div>
</div>            
        </div>
    );
};

export default AddTask;