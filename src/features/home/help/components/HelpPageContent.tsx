import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function HelpPageContent() {
  return (
    <Accordion type="single" collapsible className="mt-3 w-3/4 flex-1 md:w-1/3">
      <AccordionItem value="item-1">
        <AccordionTrigger className="md:text-[16px]">How to use this App?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <div>
            <h3 className="font-bold md:text-[16px]">STEP 1</h3>
            <p className="md:text-[15px]">Influencers must register first.</p>
          </div>
          <div>
            <h3 className="font-bold md:text-[16px]">STEP 2</h3>
            <p className="md:text-[15px]">
              Please wait for admin approval to complete the account creation process.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-[16px]">STEP 3</h3>
            <p className="md:text-[15px]">
              Once approved by the admin, your data will be published and displayed.
            </p>
          </div>
          <div>
            <h3 className="font-bold md:text-[16px]">STEP 4</h3>
            <p className="md:text-[15px]">You can edit or update the submitted data at any time.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="md:text-[16px]">Terms Of Services</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="md:text-[15px]">
            Users are encouraged to remain vigilant against fraud. This platform only provides
            influencer data and does not take responsibility for transactions or collaborations
            conducted outside the application. Influencers are responsible for ensuring the
            authenticity and accuracy of their profile information.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
