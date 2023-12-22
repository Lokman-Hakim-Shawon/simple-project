import Email from "./Email";

const ContactBanner = () => {
    return (
        <div className="hero min-h-screen bg-blue-200 my-10">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact <br/>Information</h1>
      <p className="py-6">Here you will find all Information of this site. If you want to contact<br/> with us. You can call,message vai linkedin,facebook,phone.<br/> If you want to check our more project you can browse our github or Youtube channel.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <Email></Email>
    </div>
  </div>
</div>
    );
};

export default ContactBanner;