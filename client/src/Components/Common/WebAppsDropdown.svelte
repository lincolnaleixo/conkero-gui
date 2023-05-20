<script>
    import { Dropdown, DropdownToggle, DropdownMenu, Row } from "sveltestrap";
    import github from '../../assets/images/brands/github.png'
    import bitbucket from '../../assets/images/brands/bitbucket.png'
    import dribbble from '../../assets/images/brands/dribbble.png'
    import dropbox from '../../assets/images/brands/dropbox.png'
    import mail_chimp from '../../assets/images/brands/mail_chimp.png'
    import slack from '../../assets/images/brands/slack.png'
</script>

<Dropdown class="topbar-head-dropdown ms-1 header-item">
    <DropdownToggle
        type="button"
        color=""
        class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle p-0"
    >
        <i class="bx bx-category-alt fs-22" />
    </DropdownToggle>
    <DropdownMenu class="dropdown-menu-lg p-0 dropdown-menu-end" end>
        <div
            class="p-3 border-top-0 border-start-0 border-end-0 border-dashed border"
        >
            <Row class="align-items-center">
                <div class="col">
                    <h6 class="m-0 fw-semibold fs-15">Web Apps</h6>
                </div>
                <div class="col-auto">
                    <a href="{null}" class="btn btn-sm btn-soft-info">
                        View All Apps
                        <i class="ri-arrow-right-s-line align-middle" /></a
                    >
                </div>
            </Row>
        </div>

        <div class="p-2">
            <Row class="g-0">
                <div class="col">
                    <a class="dropdown-icon-item" href="{null}">
                        <img
                            src={github}
                            alt="Github"
                        />
                        <span>GitHub</span>
                    </a>
                </div>
                <div class="col">
                    <a class="dropdown-icon-item" href="{null}">
                        <img
                            src={bitbucket}
                            alt="bitbucket"
                        />
                        <span>Bitbucket</span>
                    </a>
                </div>
                <div class="col">
                    <a class="dropdown-icon-item" href="{null}">
                        <img
                            src={dribbble}
                            alt="dribbble"
                        />
                        <span>Dribbble</span>
                    </a>
                </div>
            </Row>

            <div class="row g-0">
                <div class="col">
                    <a class="dropdown-icon-item" href="{null}">
                        <img
                            src={dropbox}
                            alt="dropbox"
                        />
                        <span>Dropbox</span>
                    </a>
                </div>
                <div class="col">
                    <a class="dropdown-icon-item" href="{null}">
                        <img
                            src={mail_chimp}
                            alt="mail_chimp"
                        />
                        <span>Mail Chimp</span>
                    </a>
                </div>
                <div class="col">
                    <a class="dropdown-icon-item" href="{null}">
                        <img
                            src={slack}
                            alt="slack"
                        />
                        <span>Slack</span>
                    </a>
                </div>
            </div>
        </div>
    </DropdownMenu>
</Dropdown>
