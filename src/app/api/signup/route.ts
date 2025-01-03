import User from '@/models/User';
import connect from '@/utils/database';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
	const { fname, lname, email, password } = await request.json();

	await connect();

	const existingUser = await User.findOne({ email });

	if (existingUser) {
		return new NextResponse('Email is already in use', { status: 400 });
	}

	const hashPassword = await bcrypt.hash(password, 5);
	const newUser = new User({
		fname,
		lname,
		email,
		password: hashPassword,
	});

	try {
		await newUser.save();
		return new NextResponse('Signup success', { status: 201 });
	} catch (error: any) {
		return new NextResponse(error, {
			status: 500,
		});
	}
};
