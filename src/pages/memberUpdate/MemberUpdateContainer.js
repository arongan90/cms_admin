import React, { useEffect, useState } from 'react';
import MemberUpdatePresentational from "./MemberUpdatePresentational";
import axios from "axios";
import * as constants from "../../utils/constants";
import {useHistory} from "react-router-dom";

const serverProtocol = constants.config.PROTOCOL;
const serverURL = constants.config.URL;

const MemberUpdateContainer = ({ match }) => {
    const history = useHistory();
    const {memberId} = match.params;
    const [tabMenu, setTabMenu] = useState(0);
    const [memberInfo, setMemberInfo] = useState(null);
    const [updateInputs, setUpdateInputs] = useState({
        name: '',
        email: '',
        passwd: '',
        passwd2: '',
    });

    const handleTabMenu = value => setTabMenu(value);
    const onCancel = () => history.push(`/memberDetail/${memberId}`);
    const onChange = e => {
        const { name, value } = e.target;
        setUpdateInputs({
           ...updateInputs,
            [name]: value,
        });
    }
    const onUpdate = () => {
        console.info('수정');
    }

    const fetchMember = async () => {
        try {
            const member = await axios.get(`${serverProtocol}${serverURL}/memberData/${memberId}`);
            setMemberInfo(member.data);
            setUpdateInputs({
                ...updateInputs,
                name: member.data.name,
                email: member.data.email
            });
        } catch(e) {
            throw new Error(e)
        }
    }

    useEffect(() => {
        fetchMember();
    }, []);


    return (
        <MemberUpdatePresentational
            tabMenu={tabMenu}
            handleTabMenu={handleTabMenu}
            memberInfo={memberInfo}
            updateInputs={updateInputs}
            onChange={onChange}
            onCancel={onCancel}
            onUpdate={onUpdate}
        />
    )
}

export default MemberUpdateContainer;