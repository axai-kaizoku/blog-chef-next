export default function CreatePost() {
	return (
		<>
			<div className="p-7">
				<h1 className=" font-semibold text-3xl">Create Blog Post</h1>
			</div>
			<div className="flex justify-center items-center">
				<div className=" w-full mx-5 border"></div>
			</div>
			<div className="w-full h-3/5   flex flex-row justify-center items-center ">
				<div className="shadow-xl rounded-lg bg-white w-1/2 h-5/6 p-4">
					<div className="w-full h-full">
						<div className="flex flex-row justify-center items-center ml-8">
							<label
								htmlFor="title"
								className="m-1 text-lg">
								Title:
							</label>
							<input
								className="m-8 p-2 w-1/2 border-black border-2 rounded-md"
								type="text"
								name="title"
							/>
						</div>
						<div className="flex flex-row justify-center items-start">
							<label
								htmlFor="content"
								className="mx-2 text-lg">
								Content:
							</label>
							<textarea
								className=" p-2 border-black border-2 rounded-md"
								name="content"
								id="content"
								cols={36}
								rows={4}></textarea>
						</div>
						<div className="flex flex-row justify-end items-center h-1/4 w-4/5">
							<button className="border border-blue-100 bg-blue-400 p-2 rounded">
								Post
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
