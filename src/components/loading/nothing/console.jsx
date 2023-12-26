import React, { useEffect } from "react";
import "./console.css";
export default Console;

function Console() {
  let empty = [];
  let myShow = [
    "Host Name:                 USER",
    ">OS Name:                   Microsoft Windows ****",
    ">OS Version:                6.3.9600 N/A Build ****",
    ">OS Manufacturer:           Microsoft Corporation",
    "OS Configuration:          Standalone Workstation",
    "OS Build Type:             Multiprocessor Free",
    " Registered Owner:          admin<",
    " Registered Organization:",
    "> Product ID:                ****-****-****-****",
    "> Original Install Date:     **/**/20**, *:**:*5 PM<",
    ">System Boot Time:          **/**/20**, **:**:*2 AM",
    "System Manufacturer:       *********-*****",
    "System Model:              *** ****** **** ***",
    "System Type:               x**-based PC",
    ">Processor(s):              * Processor(s) Installed.",
    ">                        [01]: ******* Family * Model ** Stepping * GenuineInt",
    ">el ~1200 Mhz",
    "BIOS Version:              Insyde F.26, */*/20**",
    "Windows Directory:         C:Windows",
    "System Directory:          C:Windowssystem**",
    "Boot Device:               DeviceHarddiskVolume*",
    "System Locale:             en-us;English (United States)",
    "Input Locale:              en-us;English (United States)",
    ">Time Zone:                 (UTC-07:00) Pacific Time (US & Canada)",
    "Total Physical Memory:     3,988 MB",
    "Available Physical Memory: 961 MB",
    "Virtual Memory: Max Size:  6,571 MB",
    "Virtual Memory: Available: 2,227 MB",
    ">Virtual Memory: In Use:    4,344 MB<",
    ">Page File Location(s):     C:pagefile.sys",
    ">Domain:                    MAGICAL",
    "Logon Server:              MicrosoftAccount<",
    "Hotfix(s):                 1** Hotfix(s) Installed.",
    "                       [01]: KB2*******_Microsoft-Windows-CameraCodec-Package",
    ">Network Card(s):           * NIC(s) Installed.",
    "                       [01]: ****** ***e FE Family Controller",
    "                               Connection Name: Ethernet",
    "                               Status:          Media disconnected",
    "                      [02]: Ralink ****** 8**.**1bgn Wi-Fi Adapter",
    "                                Connection Name: Wi-Fi",
    "                                DHCP Enabled:    Yes",
    "                               DHCP Server:     19*.1*8.*.*<",
    "                                IP address(es)",
    "                               [01]: 1**.**8.*.*2",
    "                                [02]: fe*0::94fe:*8f6:d*e6:*6*c",
    "                                [03]: 2a*2:2*5*:1*f**:*",
    " Hyper-V Requirements:      VM Monitor Mode Extensions: Yes",
    "                        Virtualization Enabled In Firmware: No",
    "                        Second Level Address Translation: Yes",
    "                     Data Execution Prevention Available: Yes",
    
  ];

  return (
    <div className="all-console">
      <div className="top">
        <p>cmd_{"<"}</p>
      </div>
      <div className="consoleMain">
        <div className="console-text">
          {
            // setInterval(() => {
            //   return <p>{'hello'}</p>
            // }, '1000')
          }
          {myShow.map((el, index) => {
            return <p style={{ color: "green" }}>{el}</p>;
          })}
        </div>
      </div>
      <span class="loader"></span>
    </div>
  );
}
