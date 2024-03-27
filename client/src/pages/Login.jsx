import LoginImg from "../assets/LoginImg.png";
import Logo from "../assets/Logo.png";
import { FaArrowRight } from "react-icons/fa6";
import {
	FaFacebookF,
	FaGoogle,
	FaInstagram,
	FaLock,
	FaEye,
	FaEyeSlash,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<section className="bg-[#F7F4F2] grid h-screen grid-cols-2 pb-10">
			<div className="grid-cols-2 flex flex-col items-center justify-center">
				<img className="my-5" src={Logo} alt="logo" />
				<div className="mb-4">
					<h1 className="text-[#4F3422] font-bold text-3xl">
						Welcome to the ultimate UI Kit!
					</h1>
					<h1 className="text-[#4F3422] font-bold text-3xl text-center">
						<span className="text-[#926247]">ThreapEase</span> UI
						Kit
					</h1>
				</div>
				<p className="text-[#736B66] mt-4 text-xl w-1/2 text-center">
					Your mindful mental health AI companion for everyone,
					anywhere 🍃
				</p>
				<img className="h-1/3 my-14" src={LoginImg} alt="login-img" />
				<div className="bg-[#4F3422] py-3 px-5 text-md rounded-full font-semibold text-[#F7F4F2] flex items-center">
					<h1>Let{"'"}s Get Started</h1>
					<FaArrowRight className="ml-2" />
				</div>
			</div>
			<div className="grid-cols-2 flex flex-col items-center justify-center">
				<div className="fixed top-0 bg-[#4F3422] flex items-center pt-2 pb-2 rounded-b-full justify-center w-2/5 ">
					<img className="my-5 object-cover" src={Logo} alt="logo" />
				</div>
				<h1 className="text-[#4F3422] font-bold text-2xl mt-20 mb-10">
					Sign In To{" "}
					<span className="text-[#926247]">ThreapEase</span>.ai
				</h1>
				<form className="w-1/2">
					<label
						htmlFor="email"
						className="text-[#4F3422] font-semibold text-xl mb-2"
					>
						Email Address
					</label>
					<div className="relative mb-4">
						<MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4F3422]" />
						<input
							type="email"
							id="email"
							className="pl-10 w-full px-3 py-2 border border-[#4F3422] rounded-md"
							placeholder="Enter your email..."
							required
						/>
					</div>
					<label
						htmlFor="password"
						className="text-[#4F3422] font-semibold text-xl mb-2"
					>
						Password
					</label>
					<div className="relative mb-4">
						<FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4F3422]" />
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							className="pl-10 w-full px-3 py-2 border border-[#4F3422] rounded-md"
							placeholder="Enter your password..."
							required
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4F3422]"
						>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</button>
					</div>
					<div className="flex flex-col justify-center">
						<button
							type="submit"
							className="bg-[#4F3422] py-2 px-4 text-md my-5 rounded-full font-semibold text-[#F7F4F2] flex items-center justify-center"
						>
							Sign In
							<FaArrowRight className="ml-2" />
						</button>
					</div>
				</form>
				<div className="mt-6 flex justify-around">
					<button className="text-[#4F3422] border-[#4F3422] mx-3 border border-solid border-opacity-50 w-10 h-10 rounded-full flex items-center justify-center">
						<FaFacebookF />
					</button>
					<button className="text-[#4F3422] border-[#4F3422] mx-3 border border-solid border-opacity-50 w-10 h-10 rounded-full flex items-center justify-center">
						<FaGoogle />
					</button>
					<button className="text-[#4F3422] border-[#4F3422] mx-3 border border-solid border-opacity-50 w-10 h-10 rounded-full flex items-center justify-center">
						<FaInstagram />
					</button>
				</div>
				<div className="mt-7 flex flex-col justify-between space-y-2 text-center">
					<p href="/register" className="text-[#4F3422]">
						Don{"'"}t have an account?{" "}
						<span className="text-[#53A06E]">Sign Up.</span>
					</p>
					<p href="/forgot-password" className="text-[#4F3422]">
						<span className="text-[#53A06E]">Forgot password</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Login;
