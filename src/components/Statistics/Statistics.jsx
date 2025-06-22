const Statistics = () => {
  return (
    <div className="statistics flex justify-center items-center my-20 px-4 sm:px-6">
  <div className="statisticsMain flex flex-col gap-10 w-full max-w-7xl">
    
    {/* Header */}
    <div className="letter px-0 sm:px-8 text-center sm:text-left">
      <h1 className="font-inter font-semibold text-2xl sm:text-3xl md:text-[44px] leading-tight text-white">
        Hil taýdan iýmit öndürmäge ynanýarys
      </h1>
    </div>

    {/* Stats */}
    <div className="usersWorkers text-white flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-20 items-center justify-between text-center sm:text-left">
      <div className="users flex flex-col gap-2">
        <span className="font-inter font-bold text-4xl sm:text-5xl leading-tight">2M+</span>
        <span className="font-inter font-normal text-base sm:text-lg leading-6">Ulanýan Müşderiler</span>
      </div>
      <div className="likedUsers flex flex-col gap-2">
        <span className="font-inter font-bold text-4xl sm:text-5xl leading-tight">98%</span>
        <span className="font-inter font-normal text-base sm:text-lg leading-6">Halan Müşderiler</span>
      </div>
      <div className="ourSection flex flex-col gap-2">
        <span className="font-inter font-bold text-4xl sm:text-5xl leading-tight">20+</span>
        <span className="font-inter font-normal text-base sm:text-lg leading-6">Biziň Bölümlerimiz</span>
      </div>
      <div className="totalWorkers flex flex-col gap-2">
        <span className="font-inter font-bold text-4xl sm:text-5xl leading-tight">100+</span>
        <span className="font-inter font-normal text-base sm:text-lg leading-6">Jemi Işgärler</span>
      </div>
    </div>
  </div>
</div>

  )
}

export default Statistics
