

import Image from 'next/image';
import React from 'react';
import blog from '@/assets/images/blog/6.png';

const BlogDetails = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-12.5 py-7.5">
        <div className="container-small">
          <div data-aos="fade-up" data-aos-duration={500} data-aos-easing="ease-in-out">
            <div className="text-center md:pb-12.5 pb-5">
              <div className="mb-7.5 flex gap-7.5 justify-center">
                <div className="bg-dark py-0.5 px-3.75  rounded-full font-medium text-sm  mb-2.5 text-primary">
                  Business
                </div>
                <p>August 6, 2024 </p>
              </div>
              <h1 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5">
                Bad habits that people in the industry need{' '}
              </h1>
              <p className="mb-2.5">
                Pleasure and so read the was hope entire first decided the so must have as on was
                want.{' '}
              </p>
            </div>
            <div>
              <Image src={blog} alt="" className="rounded-2xl" />
            </div>
            <div>
              <h5 className="mb-2.5 md:text-2.5xl text-1.5xl mt-10">
                Up-coming business bloggers, you need to watch{' '}
              </h5>
              <p className="mb-10">
                The printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It
                was popularised in the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.{' '}
              </p>
              <ul className="list-disc pl-5 space-y-2 md:mb-10 mb-5">
                <li className="mb-2.5">
                  There are many variations of passages of Lorem Ipsum available.
                </li>
                <li className="mb-2.5">Iusto odio dignissimos ducimus qui blanditiis.</li>
                <li className="mb-2.5">Praesentium voluptatum deleniti atque.</li>
                <li className="mb-2.5">Quas molestias excepturi sint occaecati.</li>
              </ul>
              <p className="mb-10">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.{' '}
              </p>
            </div>
            <div>
              <h5 className="mb-2.5 md:text-2.5xl text-1.5xl">
                10 tell-tale signs you need to get a new business{' '}
              </h5>
              <p className="mb-10">
                However those who do not know how to pursue pleasure rationally encounter extremely
                painful consequences. Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because occasionally circumstances
                occur in which toil and pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes laborious physical exercise, except to obtain
                some advantage from it? But who has any right to find fault with a man who chooses
                to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                produces no resultant pleasure?{' '}
              </p>
            </div>
            <div className="bg-primary rounded-2xl md:p-12.5 p-5 mb-10">
              <p className="text-black text-xl">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt.
              </p>
            </div>
            <p className="mb-10">
              These cases are perfectly simple and easy to distinguish. In a free hour, when our
              power of choice is untrammeled and when nothing prevents our being able to do what we
              like best, every pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations of business it will
              frequently occur that pleasures have to be repudiated and annoyances accepted. The
              wise man therefore always holds in these matters to this principle of selection: he
              rejects pleasures to secure other greater pleasures, or else he endures pains to avoid
              worse pains.{' '}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
