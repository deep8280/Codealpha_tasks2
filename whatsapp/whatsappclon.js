 let $=el=>{
    return document.querySelectorAll(el);
}

let user=[
          "Deepak",
          "HTML",
          "CSS",
          "Javascript",          
          "Angular JS",
          "Bootstrap",
          "React JS"          
];
let link=[
          "https://media.licdn.com/dms/image/D4D03AQGcOphrcX69TQ/profile-displayphoto-shrink_800_800/0/1688966182121?e=1700697600&v=beta&t=HKLDlX5w002ntoFF2_AQygTzOcToWIgBvpbRpHOM-b0",
"data:image/png;base64,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",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX///8Cd70Dm+Xu7u4AcbuRt9oDitIAb7oAdbwCdrsAmuUAbbkAleT39/f29PEAc7u90OAAarjL5fiowdq02PQ+isRDq+nT4vBpoM8Ak+OMsNPw9voDlN0Cgsm0zuXg6/Wgwd97qtRWlsoyhcPH2+xJkMiBrtbm7/e70ugDhs2h0PIAZba83vaSyfDX6/ljtetRr+ovpOeBwe5tuuwAg9Dg5er/+vRBm9fh5+vK1+RsoMyXwuSdqM0sAAAJ4ElEQVR4nO2daVvbSBCEhbEtxTIWYO4rBAK5SCAhJ/v//9daDCRud0vT0lQbwTP1fTX7prFc3TUzTpKoqKioqKioqKioqKioqKioqKioKIgOLwdd1uVhMOHap36X9WktvIjpSpeVhgMmK9lTU9QoWwEQbneacBtAeFY8NUaNijMA4ZtOE74BEA76T41Ro/4AQHjaacJTAOH7Ln9dpO8BhLv5U2PUKN8FEL7uNOFrAOHhxlNj1Ggj3JbOBK7hqzDRh+UIwKSAmprjYZg+zD8sKyCE50jCbNgL09H8/012DiGE2rZgwuE8IcS0Jcldtwjnn1bcQQgPOkVIPofFAYQQatuCCY/nnwYxbUlygrRtWML0BEL4tlOE5GnpWwgh1LZhCSGmDWzbggmJqcGYtiTpEiH5wl/ZwABC54lYQsQssdR5Zwkxpi1JLoBf+aGE1LRdgAj3ukQ4/6Yp9kCElx0ipKbtEkSItG2hhBamDWvboIQg04adJ4YSkodBZomlkPNEKCFklljqXYcIyddh/g5EiDSmgYQjatpAtlRjTDO1hr2RVgLgETXeKEB/DLw4xqxRWA3ppA0RADv5YuB0+nOi1U/9sl95FSkhIgB28s0T+6eTVa0a7J3ocUKLWWIpXwxcHJgQjvlfKTVtiADYyRcDF29MCPc9hJAA2MlnTIszC8JDgdDGlvptW3ZhQfhO+CulthRl2hS27dyC8ItASFaFmTb/PDFbsSDc9BJiZomlvLYttyC8EgiNTJvftuW/DQi3OKGVaUuSzGNq8h8GhB8FQmJpMiChLwbO/xgQfvYRomaJpXy2LV03IPy2PNPmj4HTqfpVoye8FQjJLBETADsNcNZbT3jNCaktxZk2hW3TW2894Q4ntDJt/nliA+utJxTaQ5tZYilfDFzsGRAKYwyyKCgAdvLatu0/60q93RQlTM2E1oIsCjRtCtuWpVp9H0va31IRmpk2YAxcMU0cb/J/VU44MgmAnfqovW1VhF/Ykrw9pLPErA8lhO3eqyLkn0OhPbQzbcAYuIJwn3+mhPbwyCQAdoLFwFWEfEmhPaS2FBUAO8Fi4Kq/Ur6k0B7aBMBOsGMlMuHoK19SaA+paUPa0pltMybc4UsK7SElRJo24O69CsJrvqTQHpInQU0bMAauILzlSwrtIXkScJZYChYDy4Tjz3zJG05oEwA7raFsWwXhR76k0B5S0wY4ATwv28/hWDDevD2ks0TUrr1HoU4DVxBe8RV98SguAHZCnQauIOTGW2ierAJgJ9SxkgpCoZnlhHazxFJtTgPrO2DBeAvtIZ0l4gJgpxa2LZtKOtmSxBcU0kOrANhp2pwwFTdoaN/xQntITdsUTNhi914eNGsT2kOrANiphW2TIzctodAe0qdjTVurYyVy5KYlFNpD+nTkLLFUi917+W4IodAeGs4SS7WooRgqagl5e0hniZgTwPNqbtvkUFFLyNtDOktEm7Y288R0XQoztIS8PbScJZZqbtvk2FRLyNPDI1PT1uY0cD+IkLeH1JYiA2Cn5qeB5WBYS8jbQ4sTwPNqfqxEDoa1hHxzKbWlp3DC5sdKissQQp9pw84SSzWfJxZ3WELycPAssVRz2yZH30pCoT0kD4ebtja2Td5XqyQU2kNj09YiBpb31SoJhfbQbNfeoxpf4pKdSy2w8jQCJ6SmDXNtC9VxJUqltgX92uH6yv/keHtITwAfGxC2iIGFQ0HFUDj+o8pHLQNgJ0wMLE4TR3w13h5aBsBOmBhYItTlo3SWiA2AnTCngbWEvAG2Nm2oGFgkvOGr8QbYMgB2wsTAIqGQj/L2kNpSvGlDxcAi4Te+Gs9HyWPgs8RS3hi44NIRSgkwb4ApITYAdvLFwMUBk/D6FQmFBJg3wKYBsJPnc5ivMof2m5ddJBSCGU/EjQ6AnTzzRGHErSUUEmCPLcXPEkt5YmBpAKwk5JtLBULTANjJM09MOeFEScgzbt4A2wbATp4YWBgAT5RvGv5ifO2xpegA2MkTA6cnnJCfCJMIhYz7C6uhbQDs5DGmwgB48kpHyNfi+ai9LfXGwP0BJ+R3aImehq/F20PbANjJY9uEAfCExzkC4ajH1+L5KHmKiWnzzhOFk0GTCxWhqj2khPhZYinPPFEYAE8u2EdXIBwLzRNvD01uE1yUp4bCAHh9L+3Tb4xFwtF4fCt84fP2kBDiA2Cn+nliIY1HJ6snZ3k6B0kIZ3jXgmNLhHzUfpZYqj4GzrbF82uTyep0DvIf4Wi8fyNYbifWAFsHwE71ti2rvFhh1mRML3J3sOiBsBYvEdpD6wDYqT4Grr1YoYTc3phBloQzvJ2t+ncFaw+tA2AnTwxc1J+ynEx+nM4gP4z2dz56X4UsH6WzRHwA7OSxbWkt4APk4JcfLxGap2WYNm8MLO/UW4TUJTPMeFsHwE6eeaLu6gjVgIW3h/azxFIe26a7OkJFyPNRupKNafPaNiAhTw/JSlamzRcD6y7HUBHy9tDwBPC8PA0ib/LbEvL2cAmzxFL1l0Lrrv9oR0iPy1iZNl8MXJytT/yMGsJNllrYB8BOnhi4SPt3M8h6Si/h5rfxvmfXnkUA7OSNgbN7yNU6yHrCzdvxWLjVc4HQIgB20sTAM8h076QasobwqgKvtyzTpt+9VwdZRViDt0hoZtoaHSuphBQJr67r8HrLmSWWahYDF/38bMogOeHV9X49Xm85s8RSjU8DFymDXCD0Vk8itAiAndpcCr0IOU+4deOvnkBoZ0vbXlNzD/n7AfKR8FCP11uaLQ04DVykGxcOcq053nICYKeQ08BF/x7yZ2O83nICYKfA08BZP9/+b6cp3iKh2SyxVPhvAxffG+P1lhMAO4Vf4tLuXn0ySzQKgJ3C9ye2I1yWLUX8lkc7wmWZNsTuPQChoWlD/MhcO0LyCLNZYqnw3/IAEFqaNsDtgi0Ij4b0EZamzX8pNJpwNDxeWfh1EOgV0FzBtws2IZwVT/gXNQuAnYIvcdESCsV7kKlpA/w2sIpQLt4joVUA7BT828BewuriPRJaBcBOwbatnrC2eA8yNW2AH5mrJvQW70GGs8RSwcdKKgg1xXsktAqAnYJtm7RzT1m8B5mattK25WFXCi8SNije/X/ez21N20y7g/ONtPGJWZGwYfGyIt04H1g2Fn91eLLXb1vKv4TNi9ffO7Eu37zalvKesLvFo5qVMm1cylfD5sVLl1s8qhalbEL3VMWjalVKDd4TF48q8AXL6bpRPKqQF+wC3tJfm3qFl7KTxaMK+q7scPGo2pTyGRSPqlkpn0/xqHSlfHbFo/KV8rkWj6qqlM+8eFS8lC+jeFT/SvmiikflSvnyike1e/oiixcVFRUVFRUVFRUVFRUVFRUVFRX1AvQ/a2YcX7UwwxAAAAAASUVORK5CYII=",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpfvJcv559Q-3oCEusQwwR_v-QgGPSa3GvfEor36Hlnh1o6Qd9&usqp=CAU",          
          "data:image/png;base64,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",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEVWPXz///9QNHjp5e5TOnprVoz6+ftLLnVmT4luWo6ajq/IwdNpU4tVO3vCu89RNnhJK3REI3HPydnb1+J+bZnJw9T19Pe5scato75bQ4BOMXd2ZJNHJ3KIeaFgSYRxXpCWiazr6e+0q8PX0t7l4OulmriMfqOBcZyglbK3rsavpcCIeqE49GE1AAAH8UlEQVR4nO2d63aiMBCAE6REoDFcLAiiSNXadt///RYv3drKWLtmmJjj99dzcvjMDZKZhPFzZEkebPx5wcykmPubIE+ysw4M/MVLgmEclUpJapEzSKXKKB4Gifdrw3TBKselFrgQ16nYIv2VYTitHJOr7hTpVNOwsyK7DJ/qSFE/8X+gIj+8yHAwFrfot0WJ8epnw4lzq35bVDn5wTCrBfVDXomos3OG6U1X4B7lpLBhKG5lfjiHK0LIMBe3NUNASJF3G+a33gU/OVb8NAwtqcEdRw31n2Fqk2DbUNPvhtnNvIRehutk3wzr258mvqLqr4YTe0aZD8Tk2HBVUj8PAuXqyHBsWxvdosafhqF9bXSLePow9KwbZvYo3zsYhhH1syARhQfDqZ1V2FbidG+YVtRPgkaV7gwXDvWDoOEstoYes+mF9CuSea1hYm8jbZtp0hoG9jbStpkGreHQro+Kr7hDzrKY+ilQiTOW2Drd74kSltv4WfFJmbPA1heaPSpgG8sNN8y3d77fIn02p34GZObM1D16Xdjud+fOnTt37ty5cwHu9Uhp8qu/fPCv5GE4L8oqEqVyTRSVauVdSdbSDJJ8/eKXUWncp6p0BlwbXpasp5VhQYNaDXdko3FsUmCrfsOWZi3NiT1DMWzJ56bE9mAZcu9dmdEf0QzbtrqJTKhGRMO2qZpQjaiGPB3SK+Ia8swn3/dDNuTeI3UtYhtyryCeGdENeUMcrIVvyEe0u5s9GPIZ6WjTh2FDOtj0YcjXlHvUvRg2lAFNoGESXsJTsrzkH6KM9wEN55G4gCiKqrj4kzfnDdOSrhJBw4fLJ2qpRFWP4Czelppu2tdhuEVFj09nDNd0zVSXIWNutYANl3SjqT5DxsQYbKlZQdYRdRqy8gWsRLqOqNVwH3beyQvZe41eQ3cItdNnso6o15BFI8DwiewbSrOh2gCGdIOpZkPmAIeUrMjeanQbVkl3cQOyrQzdhuV7d3EN2QEy2ltpABhaU4fQUGNPK3Xr7uJW9hg+dBeXWjNbuMPu4hJbZnywDumOs+irH9KlD2ofS2fdxdHluGqfD187S7PlC7hFdH9cLOm2Z7S/lzadpREumOr+epp2Fub95/+lA82G4rmzMLrZUPsqRtH9eTgj3H3SvBL11lkW5aK+XkOgF3LS7EGdhgpoo0+kufQaDVXRdJaU0R6HoM9Q+MAi1Jg2aEiToXScdXc5fE2caK7F0C3Fn9NDR/fk1AdagIaP6qJEBKVKET+sIT8+Ij/cCTScPl7AQz1+mYwaSI/zN8qZ8AdDLQQGHPaAadj45E2UoRrmZiReoBmmU+pB9ACSYToz5jhxHMN1bE7aDI6hlyWvRWVGLSKONMnMiIpEnQ+bhQG9ETn6spmRp3ihx5eGjLgae4jVn9K+2fQQI+wtSN9Oe4mCfqVU7MWQL0xcEdYL4VoNaLgOLuR1/TxKmh8MM7rsJ9BwWDoXUpYiip3N81nLJVlasLbVRFXG43OR3mTb3FrXvKN6CRp6VOEmendmVNm9yb3lmWg81bx/KOFodqqzjnXvcjPHhxTfadqpdkNWjgHDjKaZ6jdk0cmVWwcWJF8ZCIYMTIcjeT1FMQQSS2jChjAMmQLK/EPRTFEMTy+/20MymuLUIRCxkFJ0RBRDpprOMhuKjohjGAFZFxQZbDiGUNYFxVCDYwhlXbwSfEIh9UNgRqTI0UMyBGKhKS6lQjIEMmeWBNNFv3VIMSH22w9Ta1qpA6TmU+QGIc2HwIupPYZQ1ro1rVSWQKHWjKXuA7AaRRHHh2IIDTR8Yks/FNDSN8VaFIahAjL0aDLYMAwFdP5HNrfjCxhaw+B8RbEmrN9QOg1kSHLAiXZDGcO7iCTpT9oN47y7vJaMZPNJd/5hBZ4yRHUIplZDKR7BtAROda+2PkPpCgYsse1Z0YRFazGU0lXC8d+AxKcDRLEKV56buDs6sSpZPXs71z63DCrDdrnD0YU8JemgOXto4h6qNMueor443ZXFfRnSHXrdlyHdack9GU7oIkz7MRwRXufRi2FoZD6+RnLSNMseDNe0N86gG2bUd7FgGyYF9RUeuIbZS0SdFIRq6E1K6gpENczemQmJzmiGq0AacmkXzr1r+bSkP2rggH7D1fOYCbLzWE/Ratgs89nQMUmPbe81aK43ywbLMA+mhRLCxJs6h9dQFLKM47iKhHCUqfetSntvkb1z586dO8cU1A+ATMHm1I+AzJz5dk+7rs9IT8/ER21YYLlhwHLK+wXxKXNGk7rYG1HCspj6IVCJM8aH5KuSiLhDzkjviETHCVpDsk3yPqiS1pDqvII+kMxrDQkvyEBnGzTeGqb2NtMq3RkS3gGCzC7ieGsY2jrp79JvtoZebWclqto7GBJeoYiK2MVU7wyJ4lORUfujYPaGKxs/MMrVkSGf2NdOxSGP8WDIrRts/qUXfRhmjl2fGO6/S00/DHlqyNa5HqRI+XdDHtqkeJQg9mlIeAmfdsRR8s2RYatoRy3KY8Evhm1DtWG4cb/mMH4x5Klz+5OGclIOG/KsvvXOKOpv2TffDNu3m5uuRnV6IsOJIR+Mzbg94z9QYnyaX3Rq2H5M1QYcaf97VOR3JTB2GbaD6rQy4WqCXyCdahp2ZlB1G7aj6oJVN/Oq6joVW6SACWTIuZcEwzgqlVmxdN+QSpVRPAwSOAEONtySJXmw8eem7vUXc38T5Mn55My/MC2OiAjNPNkAAAAASUVORK5CYII=",
          "data:image/png;base64,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",
                            
];
let info=[
         ["Hi, Here is Deepak","14:30",""],
         ["Hi, I'm HTML","13:51",""],
         ["Hi, I'm CSS","13:45",""],
         ["Hi, I'm Javascript","13:20",""],
         ["Hi, I'm Angular JS","11:11",""],         
         ["Hi, I'm Bootstrap","10:20",""],
         ["Typing...","10:07",""]
          
];
let message;
let tab=[".t1", ".t2", ".t3"];
onload=()=>{
    

    $(".n1 .list")[0].onmouseover=()=>{
        $(".n1 .list")[0].style.clipPath="circle(100%)";
        $(".n1 .list")[0].style.opacity="1";
    }
    $(".n1 .list")[0].onmouseleave=()=>{
        $(".n1 .list")[0].style.clipPath="circle(30% at 100% 0%)";
        $(".n1 .list")[0].style.opacity="0";
    }
    
    for(let i in tab){
        $(tab[i])[0].onclick=()=>{
            $(".dash")[0].style.transform=`translateX(${i*100}%)`;
        }
    }
    
    $(".fa-search")[0].onclick=()=>{
        $(".searchbox")[0].style.clipPath="circle(100% at 50% 50%)";
        $(".n2")[0].style.transform="translateY(-101%)";
        setTimeout(()=>{
        $(".n2")[0].style.position="absolute";
        },200)
    }
    $(".close")[0].onclick=()=>{
        $(".searchbox")[0].style.clipPath="circle(0% at 50% 50%)";
        $(".n2")[0].style.transform="translateY(0%)";
        $(".n2")[0].style.position="";
    }
    
    for(let i=0;i<user.length;i++){
        message=`<div class="chat">
                    <span class="avatar">
                        <img src="${link[i]}">
                    </span>
                    
                    <span class="container ${user[i]}">
                        <span class="info">
                            <span>${user[i]}</span>
                            <span>${info[i][1]}</span>
                        </span>
                        
                        <span class="message">
                        <span>${info[i][0]}</span>
                        <span>${info[i][2]}</span>
                        </span>
                    </span>
                </div>`;
                
            $("section")[0].innerHTML+=message;
    }
    $(".container")[user.length-1].style.border="none";
    $(".message")[user.length-1].style=`
    color:var(--green2);
    font-weight:bolder;
    `;
    
    setTimeout(()=>{
    main.style.display="block";
    loader.style.display="none";
    },3000)    
}