const protonExport = async () => 
{
	const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
	let i = -1;

	//50 <=> number of email shown by pages
	while (++i < 50)
	{
		//select email
		document.getElementsByClassName("flex flex-nowrap flex-align-items-center cursor-pointer item-container")[i].click();
		await sleepNow(1000);

		const download = async () => {
			//click on more button
			document.getElementsByClassName("button button-for-icon button-group-item button-outline-weak")[5].click();

			//click on export
			document.getElementsByClassName("flex-item-fluid mtauto mbauto")[3].click();
			document.getElementsByClassName("button button-for-icon button-group-item button-outline-weak")[5].click();
		}
		await download();
		await sleepNow(1000);
	}
}
