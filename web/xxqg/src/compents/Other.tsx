import React, {Component} from "react";
import {Dialog, List, Toast} from "antd-mobile";
import {restart, update} from "../utils/api";
import {ContentOutline, LoopOutline, QuestionCircleOutline, SetOutline, TextDeletionOutline,UpCircleOutline} from 'antd-mobile-icons'

class Other extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            level : "2"
        };
    }


    componentDidMount() {
        this.setState({
            "level": sessionStorage.getItem("level")
        })
        console.log(sessionStorage.getItem("level"))
    }

    onRestart = () => {
        Dialog.confirm({confirmText:"确认",cancelText:"取消",content:"你确认要重启吗？"}).then((result)=>{
            if (result){
                restart().then(r => {

                });
                Toast.show("重启完成")
            }
        })

    }

   
    onClick = (value: string) => {

        this.props.navigate(value)
    }

    render() {
        return <>
            <List header='管理员功能' style={{display:this.state.level === "1" ? "block" : "none"}}>
                <List.Item prefix={<ContentOutline/>} onClick={() => {
                    this.onClick("/log")
                }}>
                    日志查看
                </List.Item>
                <List.Item prefix={<SetOutline/>} onClick={() => {
                    this.onClick("/config")
                }}>
                    配置管理
                </List.Item>
                <List.Item prefix={<LoopOutline/>} onClick={() => {
                    this.onRestart()
                }}>
                    重启程序
                </List.Item>
                <List.Item prefix={<TextDeletionOutline/>} onClick={() => {
                    window.localStorage.removeItem("xxqg_token");
                    this.props.navigate("/login")
                }}>
                    退出登录
                </List.Item>
            </List>
        </>;
    }
}

export default Other
