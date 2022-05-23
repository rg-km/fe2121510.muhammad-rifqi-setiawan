// TODO: answer here
import React, { useState, useEffect } from 'react';
import profile from '../api/profile';

export default function Profile() {
  // TODO: answer here
  const getProfilePicture = async () => {
    try {
      const res = await profile.getProfilePicture();
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }
}
