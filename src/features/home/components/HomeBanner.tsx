export default function HomeBanner() {
  return (
    <div className="banner h-75 w-full bg-[url(/images/bg-1.jpg)] bg-auto bg-fixed bg-center object-cover">
      <div className="inset-0 flex h-full w-full flex-col items-center justify-center gap-3 bg-black/70 text-white">
        <h1 className="sm: text-3xl font-medium">Mudahnya Promosi</h1>
        <p className="text-sm">Dengan Pick'O mencari influencer untuk promosi menjadi mudah</p>
      </div>
    </div>
  );
}
